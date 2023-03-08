package exe.outdooradventures.contoller;


import exe.outdooradventures.entity.Location;
import exe.outdooradventures.entity.Tag;
import exe.outdooradventures.entity.User;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import exe.outdooradventures.contoller.utilities.RestUtilities;
import exe.outdooradventures.entity.Activity;
import exe.outdooradventures.repository.ActivityRepository;
import exe.outdooradventures.repository.LocationRepository;
import exe.outdooradventures.repository.TagRepository;

import java.util.List;
import java.util.Set;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/activities")
public class ActivityController {

    @Autowired
    private ActivityRepository activityRepo;

    @Autowired
    private LocationRepository locRepo;
    @Autowired
    private TagRepository tagRepo;

    // activity REST

    @GetMapping
    public List<Activity> getActivity() {
        return activityRepo.findAll();
    }

    @GetMapping("/{id}")
    public Activity getActivityById(@PathVariable int id) {
        return RestUtilities.findByIdOrThrow(activityRepo, id);
    }

    @PostMapping()
    public Activity addActivity(@Valid @RequestBody Activity newAct) {
        newAct.setId(0);
        return activityRepo.save(newAct);
    }


    @PutMapping("/{id}")
    public Activity updateActivity(@PathVariable int id, @Valid @RequestBody Activity act) {
        Activity actBeforeUpdate = RestUtilities.findByIdOrThrow(activityRepo, id);
        actBeforeUpdate.setName(act.getName());
        actBeforeUpdate.setDescription(act.getDescription());
        return activityRepo.save(actBeforeUpdate);
    }

    @DeleteMapping("/{id}")
    public void deleteActivity(@PathVariable int id) {
        Activity act = RestUtilities.findByIdOrThrow(activityRepo, id);
        for (User user : act.getUsersFavorite()) {
            user.getFavActivities().remove(act);
        }

        for (Location loc : act.getLocations()) {
            loc.getActivities().remove(act);
        }

        for (Tag tag : act.getTags()) {
            tag.getActivities().remove(act);
        }

        activityRepo.deleteById(id);
    }


    // activity's locations REST

    @GetMapping("/{id}/activities")
    public Set<Location> getActivityLocations(@PathVariable int id) {
        return RestUtilities.findByIdOrThrow(activityRepo, id).getLocations();
    }

    @PostMapping("/{actId}/locations/{locId}")
    public Set<Location> addLocToActivity(@PathVariable("actId") int actId,
                                          @PathVariable("locId") int locId) {
        Activity act = RestUtilities.findByIdOrThrow(activityRepo, actId);
        Location loc = RestUtilities.findByIdOrThrow(locRepo, locId);

        RestUtilities.throwIfMatchingIdPresent(act.getLocations(), actId, locId,
                "Activity", "location", ".");

        act.addLocation(loc);
        activityRepo.save(act);
        return act.getLocations();
    }


    @DeleteMapping("/{actId}/locations/{locId}")
    public void deleteLocationFromActivity(@PathVariable("actId") int actId,
                                           @PathVariable("locId") int locId) {
        Activity act = RestUtilities.findByIdOrThrow(activityRepo, actId);
        Location loc = RestUtilities.findByIdOrThrow(locRepo, locId);

        RestUtilities.throwIfNoMatchingIdPresent(act.getLocations(), actId, locId,
                "Activity", "location", ".");

        act.removeLocation(loc);
        activityRepo.save(act);
    }


    // activity's tags REST

    @GetMapping("/{id}/tags")
    public Set<Tag> getActivityTags(@PathVariable int id) {
        return RestUtilities.findByIdOrThrow(activityRepo, id).getTags();
    }

    @PostMapping("/{actId}/tags/{locId}")
    public Set<Tag> addTagToActivity(@PathVariable("actId") int actId,
                                          @PathVariable("tagId") int tagId) {
        Activity act = RestUtilities.findByIdOrThrow(activityRepo, actId);
        Tag tag = RestUtilities.findByIdOrThrow(tagRepo, tagId);

        RestUtilities.throwIfMatchingIdPresent(act.getTags(), actId, tagId,
                "Activity", "tag", ".");

        act.addTag(tag);
        activityRepo.save(act);
        return act.getTags();
    }


    @DeleteMapping("/{actId}/tags/{tagId}")
    public void deleteTagFromActivity(@PathVariable("actId") int actId,
                                           @PathVariable("tagId") int tagId) {
        Activity act = RestUtilities.findByIdOrThrow(activityRepo, actId);
        Tag tag = RestUtilities.findByIdOrThrow(tagRepo, tagId);

        RestUtilities.throwIfNoMatchingIdPresent(act.getTags(), actId, tagId,
                "Activity", "tag", ".");

        act.removeTag(tag);
        activityRepo.save(act);
    }
}
