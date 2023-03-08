package exe.outdooradventures.contoller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import exe.outdooradventures.contoller.utilities.RestUtilities;
import exe.outdooradventures.entity.Company;
import exe.outdooradventures.entity.Location;
import exe.outdooradventures.repository.CompanyRepository;
import exe.outdooradventures.repository.LocationRepository;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/locations")
public class LocationController {

    @Autowired
    private LocationRepository locationRepo;
    @Autowired
    private CompanyRepository companyRepo;


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
