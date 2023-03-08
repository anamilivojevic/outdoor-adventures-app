package exe.outdooradventures.contoller;

import exe.outdooradventures.contoller.utilities.RestUtilities;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import exe.outdooradventures.entity.Activity;
import exe.outdooradventures.entity.User;
import exe.outdooradventures.repository.ActivityRepository;
import exe.outdooradventures.repository.UserRepository;

import java.util.List;
import java.util.Set;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private ActivityRepository activityRepo;

    @GetMapping
    public List<User> getUsers() {
        return userRepo.findAll();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable int id) {
        return RestUtilities.findByIdOrThrow(userRepo, id);
    }

    @PostMapping()
    public User addUser(@Valid @RequestBody User newUser) {
        newUser.setId(0);
        return userRepo.save(newUser);
    }

    @PutMapping("/{id}")
    public User updateUserInfo(@PathVariable int id, @Valid @RequestBody User updatedUser) {
        User userBeforeUpdate = RestUtilities.findByIdOrThrow(userRepo, id);
        updatedUser.setId(id);
        updatedUser.setFavActivities(userBeforeUpdate.getFavActivities());
        updatedUser.setAdmin(userBeforeUpdate.isAdmin());
        return userRepo.save(updatedUser);
    }

    @PutMapping("/{id}/password-update")
    public User updatePassword(@PathVariable int id, @Valid @RequestBody String updatedPassword) {
        User user = RestUtilities.findByIdOrThrow(userRepo, id);
        user.setPassword(updatedPassword);
        return userRepo.save(user);

    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable int id) {
        RestUtilities.throwIfNonExistentId(userRepo, id);
        userRepo.deleteById(id);
    }

    // favorite activities

    @GetMapping("/{id}/fav-activities")
    public Set<Activity> getUsersFavActivities(@PathVariable int id) {
        return RestUtilities.findByIdOrThrow(userRepo, id).getFavActivities();
    }

    @PostMapping("/{userId}/fav-activities/{actId}")
    public Set<Activity> addFavActivityToUser(@PathVariable("userId") int userId,
                                              @PathVariable("actId") int actId) {
        User user = RestUtilities.findByIdOrThrow(userRepo, userId);
        Activity act = RestUtilities.findByIdOrThrow(activityRepo, actId);

        RestUtilities.throwIfMatchingIdPresent(user.getFavActivities(), userId, actId,
                "User", "activity", " among favorites.");

        user.addFavAct(act);
        userRepo.save(user);
        return user.getFavActivities();
    }


    @DeleteMapping("/{userId}/fav-activities/{actId}")
    public void deleteFavActivityFromUser(@PathVariable("userId") int userId,
                                          @PathVariable("actId") int actId) {
        User user = RestUtilities.findByIdOrThrow(userRepo, userId);
        Activity act = RestUtilities.findByIdOrThrow(activityRepo, actId);

        RestUtilities.throwIfNoMatchingIdPresent(user.getFavActivities(), userId, actId,
                            "User", "activity", " among favorites.");

        user.removeFavAct(act);
        userRepo.save(user);
    }


}
