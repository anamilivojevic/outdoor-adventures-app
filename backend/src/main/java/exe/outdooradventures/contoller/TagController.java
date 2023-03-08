package exe.outdooradventures.contoller;

import exe.outdooradventures.contoller.utilities.RestUtilities;
import exe.outdooradventures.repository.TagRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import exe.outdooradventures.entity.Tag;
import exe.outdooradventures.repository.ActivityRepository;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/tags")
public class TagController {

    @Autowired
    private TagRepository tagRepo;

    @Autowired
    private ActivityRepository activityRepo;

    @GetMapping
    public List<Tag> getTags() {
        return tagRepo.findAll();
    }

    @GetMapping("/{id}")
    public Tag getTagById(@PathVariable int id) {
        return RestUtilities.findByIdOrThrow(tagRepo, id);
    }

    @PostMapping()
    public Tag addTag(@Valid @RequestBody Tag newTag) {
        newTag.setId(0);
        return tagRepo.save(newTag);
    }

    @PutMapping("/{id}")
    public Tag updateTag(@PathVariable int id, @Valid @RequestBody Tag updatedTag) {
        Tag tagBeforeUpdate = RestUtilities.findByIdOrThrow(tagRepo, id);
        updatedTag.setId(id);
        updatedTag.setActivities(tagBeforeUpdate.getActivities());
        return tagRepo.save(updatedTag);
    }

    @DeleteMapping("/{id}")
    public void deleteTag(@PathVariable int id) {
        RestUtilities.throwIfNonExistentId(tagRepo, id);
        tagRepo.deleteById(id);
    }


}
