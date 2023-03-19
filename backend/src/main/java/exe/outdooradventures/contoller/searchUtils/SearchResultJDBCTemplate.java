package exe.outdooradventures.contoller.searchUtils;
import java.util.List;
import javax.sql.DataSource;
import org.springframework.jdbc.core.JdbcTemplate;

public class SearchResultJDBCTemplate implements SearchResultDAO {
    private DataSource dataSource;
    private JdbcTemplate jdbcTemplateObject;

    public void setDataSource(DataSource dataSource) {
        this.dataSource = dataSource;
        this.jdbcTemplateObject = new JdbcTemplate(dataSource);
    }
    public List<LocationsSearchResult> listSearchResult() {
        String testQuery = "SELECT CONCAT(loc.city, ', ', loc.address) AS full_address, loc.latitude, loc.longitude," +
                "comp.name AS company_name, comp.website_link, act.name AS activity" +
                "FROM locations loc JOIN activity_location actloc ON loc.id = actloc.location_id" +
                "JOIN activities act ON act.id = actloc.activity_id where loc.id = 1";
        String SQL = "select * from Student";
        List <LocationsSearchResult> result = jdbcTemplateObject.query(testQuery, new SearchResultRowMapper());
        return result;
    }
}
