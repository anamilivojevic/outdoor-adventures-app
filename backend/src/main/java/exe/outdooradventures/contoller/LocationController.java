package exe.outdooradventures.contoller;

import exe.outdooradventures.contoller.searchUtils.LocationsSearchResult;
import exe.outdooradventures.contoller.utilities.RestUtilities;
import exe.outdooradventures.entity.Activity;
import exe.outdooradventures.entity.Company;
import exe.outdooradventures.entity.Location;
import exe.outdooradventures.repository.CompanyRepository;
import exe.outdooradventures.repository.LocationRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/locations")
public class LocationController {

    @Autowired
    private LocationRepository locationRepo;
    @Autowired
    private CompanyRepository companyRepo;

    @Autowired
    JdbcTemplate jdbcTemplate;

    private List<Integer> stringToListOfInt(String strList) {
        if(strList == null || strList.isBlank() || strList.isEmpty()) { return new ArrayList<>(); }
        return Arrays.asList(strList.split(",")).stream().map(x -> Integer.parseInt(x)).toList();
    }

    private String idListToSQLConditionString(List<Integer> list, String propName) {
        String result = "";
        for (int id : list) {
            result += propName + ".id=" + id;
            if (list.indexOf(id) != list.size() - 1) {
                result += " OR ";
            }
        }
        return result;
    }

    // api/locations/json={searchString:"", tagIds:}
    @GetMapping("/search")
    public List<LocationsSearchResult> getLocationsFromSearch(@RequestParam(name = "keyword", required = false) String searchString,
                                                              @RequestParam(name = "tags", required = false) String tagIdStrings,
                                                              @RequestParam(name = "activities", required = false) String actIdStrings) {
        boolean hasSearchString = searchString != null && !searchString.isEmpty() && !searchString.isBlank();
        List<Integer> tagIds = stringToListOfInt(tagIdStrings);
        List<Integer> actIds = stringToListOfInt(actIdStrings);

        List<Location> locations = hasSearchString
                ? locationRepo.findLocationsContainingKeywordInNameOrDescription(searchString)
                : locationRepo.findAll();

        List<Location> filteredByTags = locations.stream().filter(l -> l.getActivities().stream().anyMatch(a ->
                tagIds.stream().anyMatch(tagId -> a.getTags().stream().anyMatch(tag -> tag.getId() == tagId))
        )).collect(Collectors.toList());

        List<Location> filteredByActivities = locations.stream().filter(
                l -> l.getActivities().stream().anyMatch(
                        a -> actIds.stream().anyMatch(actId -> a.getId() == actId)
                )).collect(Collectors.toList());

        Set<Location> finalLocations = new HashSet<>();
        for (Location l : filteredByTags) { finalLocations.add(l); }
        for (Location l : filteredByActivities) { finalLocations.add(l); }

        List<LocationsSearchResult> result = new ArrayList<>();

        for (Location l : finalLocations) {
            String fullAddress = l.getCity() + ", " + l.getAddress();
            LocationsSearchResult item =
                    new LocationsSearchResult(l.getId(), fullAddress, l.getLatitude(), l.getLongitude(),
                            l.getCompany().getName(), l.getCompany().getWebsiteLink());

            l.getActivities().stream().forEach(x -> item.addActivity(x.getName()));
            result.add(item);
        }

        return result;
    }

    @GetMapping
    public List<Location> getLocations() {
        return locationRepo.findAll();
    }

    @GetMapping("/{id}")
    public Location getLocationById(@PathVariable int id) {
        return RestUtilities.findByIdOrThrow(locationRepo, id);
    }

    @PostMapping()
    public Location addLocation(@Valid @RequestBody Location newLocation) {
        newLocation.setId(0);
        return locationRepo.save(newLocation);
    }

    @PutMapping("/{id}")
    public Location updateLocation(@PathVariable int id, @Valid @RequestBody Location updatedLocation) {
        Location locationBeforeUpdate = RestUtilities.findByIdOrThrow(locationRepo, id);
        updatedLocation.setId(id);
        updatedLocation.setCompany(locationBeforeUpdate.getCompany());
        return locationRepo.save(updatedLocation);
    }

    @DeleteMapping("/{id}")
    public void deleteLocation(@PathVariable int id) {
        RestUtilities.throwIfNonExistentId(locationRepo, id);
        locationRepo.deleteById(id);
    }

    // company REST

    @PutMapping("/{id}/change-company")
    public Company changeCompany(@PathVariable int id, @RequestBody Company company) {
        Location loc = RestUtilities.findByIdOrThrow(locationRepo, id);
        Company comp = RestUtilities.findByIdOrThrow(companyRepo, company.getId());
        loc.setCompany(comp);
        comp.removeLocation(loc);
        return companyRepo.save(comp);
    }


}
