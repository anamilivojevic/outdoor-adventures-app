package exe.outdooradventures.contoller.searchUtils;

import java.util.List;
import javax.sql.DataSource;

public interface SearchResultDAO {

    public void setDataSource(DataSource ds);

    public List<LocationsSearchResult> listSearchResult();
}