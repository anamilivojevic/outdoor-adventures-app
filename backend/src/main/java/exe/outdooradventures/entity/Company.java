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
@Table(name="companies")
@Getter @Setter @NoArgsConstructor
public class Company implements IHasGetId {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank
    private String name;
    private String websiteLink;

    // FetchType.EAGER because when the company is loaded, we want to immediately display
    // its locations on embedded map
    @OneToMany(mappedBy="company", orphanRemoval = true, fetch = FetchType.EAGER)
    @JsonIgnore
    private Set<Location> locations = new HashSet<>() {
    };

    public void addLocation(Location loc) {
        this.locations.add(loc);
        loc.setCompany(this);
    }

    public void removeLocation(Location loc) {
        this.locations.remove(loc);
    }


}
