package exe.outdooradventures.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "location")
@Getter @Setter @NoArgsConstructor
public class Location implements IHasGetId {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String city;
    private String streetName;
    private int streetNumber;
    private int phoneNumber;

    @NotNull
    private BigDecimal latitude;

    @NotNull
    private BigDecimal longitude;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;

    @ManyToMany(mappedBy = "locations")
    @JsonIgnore
    private Set<Activity> activities = new HashSet<>();

}
