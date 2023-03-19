package exe.outdooradventures.contoller.searchUtils;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.URL;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class LocationsSearchResult {

    private int locationId;
    private String fullAddress;
    private BigDecimal latitude;
    private BigDecimal longitude;
    private List<String> activities = new ArrayList<>();
    private String company;
    private String websiteLink;

    public LocationsSearchResult(int locationId, String fullAddress, BigDecimal latitude, BigDecimal longitude, String company, String websiteLink) {
        this.locationId = locationId;
        this.fullAddress = fullAddress;
        this.latitude = latitude;
        this.longitude = longitude;
        this.company = company;
        this.websiteLink = websiteLink;
    }

    public void addActivity(String actName) {
        this.activities.add(actName);
    }

}
