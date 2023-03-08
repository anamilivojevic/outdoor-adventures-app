package exe.outdooradventures.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="users")
@Getter @Setter @NoArgsConstructor
public class User implements IHasGetId {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String password;
    private String firstName;
    private String lastName;
    private LocalDate dateOfBirth;

    private String country;
    private String city;
    private boolean admin;

    @ManyToMany
    @JoinTable(name="user_fav_activities", joinColumns = {@JoinColumn(name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "activity_id")})
    private Set<Activity> favActivities = new HashSet<Activity>();

    public User(User userToCopy) {
        this.email = userToCopy.getEmail();
        this.password = userToCopy.getPassword();
        this.firstName = userToCopy.getFirstName();
        this.lastName = userToCopy.getLastName();
        this.dateOfBirth = userToCopy.getDateOfBirth();
        this.country = userToCopy.getCountry();
        this.city = userToCopy.getCity();
        this.admin = userToCopy.isAdmin();
        this.favActivities = userToCopy.getFavActivities();
    }

    public void addFavAct(Activity act) {
        this.favActivities.add(act);
        act.getUsersFavorite().add(this);
    }

    public void removeFavAct(Activity act) {
        this.favActivities.remove(act);
        act.getUsersFavorite().remove(this);
    }
}
