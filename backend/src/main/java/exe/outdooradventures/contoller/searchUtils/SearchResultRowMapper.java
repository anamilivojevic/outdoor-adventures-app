package exe.outdooradventures.contoller.searchUtils;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class SearchResultRowMapper implements RowMapper<LocationsSearchResult> {
    @Override
    public LocationsSearchResult mapRow(ResultSet rs, int rowNum) throws SQLException {

        LocationsSearchResult newSearchResult = new LocationsSearchResult();
        newSearchResult.setLocationId(rs.getInt("location_id"));
        newSearchResult.setFullAddress(rs.getString("full_address"));
        newSearchResult.setLatitude(rs.getBigDecimal("latitude"));
        newSearchResult.setLongitude(rs.getBigDecimal("longitude"));
        newSearchResult.setCompany(rs.getString("company_name"));
        newSearchResult.setWebsiteLink(rs.getString("website_link"));
        newSearchResult.addActivity(rs.getString("activity"));

        return newSearchResult;

        /*List<LocationsSearchResult> result = new ArrayList<>();

        int locationId = rs.getInt("location_id");

        LocationsSearchResult target = null;

        for (LocationsSearchResult x : result) {
            if (x.getLocationId() == locationId){
                target = x;
            }
        }

        if (target == null) {
            LocationsSearchResult newSearchResult = new LocationsSearchResult();
            newSearchResult.setLocationId(rs.getInt("location_id");
            newSearchResult.setFullAddress(rs.getString("full_address"));
            newSearchResult.setLatitude(rs.getBigDecimal("latitude"));
            newSearchResult.setLongitude(rs.getBigDecimal("longitude"));
            newSearchResult.setCompany(rs.getString("company"));
            newSearchResult.setWebsiteLink(rs.getString("website_link"));
            result.add(newSearchResult);
            target = newSearchResult;
        }

        target.addActivity(rs.getString("activity"));

        return result;*/
    }
}
