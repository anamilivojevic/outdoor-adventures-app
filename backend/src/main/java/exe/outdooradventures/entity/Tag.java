package exe.outdooradventures.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="tags")
@Getter @Setter @NoArgsConstructor
public class Tag implements IHasGetId {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    @Size(min=7, max=7)
    private String color;

    @ManyToMany(mappedBy = "tags")
    @JsonIgnore
    private Set<Activity> activities = new HashSet<>();

}
