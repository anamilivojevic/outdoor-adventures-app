package exe.outdooradventures.contoller.utilities;


import exe.outdooradventures.repository.TagRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import exe.outdooradventures.entity.IHasGetId;
import exe.outdooradventures.repository.ActivityRepository;
import exe.outdooradventures.repository.LocationRepository;
import exe.outdooradventures.repository.UserRepository;

import java.util.Optional;
import java.util.Set;

public class RestUtilities {
    private static <T> String repoTypeToLabel(JpaRepository<T, Integer> repo) {
        if (repo instanceof ActivityRepository) {
            return "Activity";
        }
        if (repo instanceof TagRepository) {
            return "Tag";
        }
        if (repo instanceof LocationRepository) {
            return "Location";
        }
        if (repo instanceof UserRepository) {
            return "User";
        }
        return "Company";
    }

    public static <T> T findByIdOrThrow(JpaRepository<T, Integer> repo, int id) {
        Optional<T> result = repo.findById(id);
        if (result.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                    repoTypeToLabel(repo) + " with id " + id + " not found.");
        }
        return result.get();
    }

    public static <T> void throwIfNonExistentId(JpaRepository<T, Integer> repo, int id) {
        if (!repo.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                    repoTypeToLabel(repo) + " with id " + id + " not found.");
        }
    }

    public static <T> void throwIfExistentId(JpaRepository<T, Integer> repo, int id) {
        if (repo.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.METHOD_NOT_ALLOWED,
                    repoTypeToLabel(repo) + " with id " + id + " already exists.");
        }
    }


    public static <T extends IHasGetId> void throwIfNoMatchingIdPresent
            (Set<T> set, int ownerId, int ownedElId, String owner, String owned, String msgEnd) {
        if (!set.stream().anyMatch(el -> el.getId() == ownedElId)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, owner + " with id " + ownerId +
                    " does not have " + owned + " with id " + ownedElId + msgEnd);
        }
    }


    public static <T extends IHasGetId> void throwIfMatchingIdPresent
            (Set<T> set, int ownerId, int ownedElId, String owner, String owned, String msgEnd) {
        if (set.stream().anyMatch(el -> el.getId() == ownedElId)) {
            throw new ResponseStatusException(HttpStatus.METHOD_NOT_ALLOWED, owner + " with id " + ownerId +
                    "already has " + owned + " with id " + ownedElId + msgEnd);
        }
    }

    public static <T> void replaceObjectInSet(Set<T> set, T toRemove, T toAdd) {
        set.remove(toRemove);
        set.add(toAdd);
    }


}
