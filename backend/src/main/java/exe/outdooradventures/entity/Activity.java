package exe.outdooradventures.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="activities")
@Getter @Setter @NoArgsConstructor
public class Activity implements IHasGetId {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank
    private String name;
    private String description;

    @ManyToMany
    @JoinTable(name = "activity_location", joinColumns = {@JoinColumn(name = "activity_id")},
            inverseJoinColumns = {@JoinColumn(name = "location_id")})
    private Set<Location> locations = new HashSet<>();

    @ManyToMany
    @JoinTable(name = "activity_tag", joinColumns = {@JoinColumn(name = "tag_id")},
            inverseJoinColumns = {@JoinColumn(name = "activity_id")})
    private Set<Tag> tags = new HashSet<>();

    @ManyToMany(mappedBy = "favActivities")
    @JsonIgnore
    private Set<User> usersFavorite = new HashSet<>();

    public void addTag(Tag tag) {
        this.tags.add(tag);
        tag.getActivities().add(this);
    }

    public void removeTag(Tag tag) {
        this.tags.remove(tag);
        tag.getActivities().remove(this);
    }


    public void addLocation(Location loc) {
        this.locations.add(loc);
        loc.getActivities().add(this);
    }

    public void removeLocation(Location loc) {
        this.locations.remove(loc);
        loc.getActivities().remove(this);

    }



}
