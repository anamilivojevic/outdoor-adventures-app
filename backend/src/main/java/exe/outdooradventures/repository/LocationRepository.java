package exe.outdooradventures.repository;

import exe.outdooradventures.contoller.searchUtils.LocationsSearchResult;
import org.springframework.data.jpa.repository.JpaRepository;
import exe.outdooradventures.entity.Location;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Collection;
import java.util.List;


public interface LocationRepository extends JpaRepository<Location, Integer> {

    @Query(value="SELECT loc.id, loc.city, loc.address, loc.latitude, loc.longitude, loc.company_id " +
            "FROM locations loc JOIN activity_location actloc ON loc.id = actloc.location_id " +
            "JOIN activities act ON act.id = actloc.activity_id JOIN activity_tag acttag " +
            "ON act.id = acttag.activity_id JOIN tags tag ON tag.id = acttag.tag_id " +
            "WHERE tag.id IN ? GROUP BY loc.id", nativeQuery = true)
    List<Location> findByTagIdIn(Collection<Integer> tagIds);

    @Query(value="SELECT loc.id, loc.city, loc.address, loc.latitude, loc.longitude, loc.company_id " +
            "FROM locations loc JOIN activity_location actloc ON loc.id = actloc.location_id " +
            "JOIN activities act ON act.id = actloc.activity_id " +
            "WHERE act.id IN ? GROUP BY loc.id", nativeQuery = true)
    List<Location> findByActIdIn(Collection<Integer> actIds);

    @Query(value = "SELECT loc.id, loc.city, loc.address, loc.latitude, loc.longitude, loc.company_id " +
            "FROM locations loc JOIN activity_location actloc ON loc.id = actloc.location_id " +
            "JOIN activities act ON act.id = actloc.activity_id " +
            "JOIN companies comp ON loc.company_id = comp.id " +
            "WHERE act.name LIKE %?1% OR act.description LIKE %?1% OR comp.name LIKE %?1%", nativeQuery = true)
    List<Location> findLocationsContainingKeywordInNameOrDescription(String keyword);

    //  act.name LIKE '%?1%' OR act.description LIKE '%?1%
    /*@Query(value="SELECT CONCAT(loc.city, ', ', loc.address) AS full_address, loc.latitude, loc.longitude, " +
            "comp.name AS company_name, comp.website_link, act.name AS activity FROM locations loc " +
            "JOIN companies comp ON loc.company_id = comp.id JOIN activity_location actloc ON loc.id = actloc.location_id "  +
            "JOIN activities act ON act.id = actloc.activity_id " +
            "JOIN activity_tag acttag ON act.id = acttag.activity_id JOIN tags tag ON tag.id = acttag.tag_id WHERE " +
            "tag.id IN ?1 OR act.id IN ?2", nativeQuery = true)
    List<LocationsSearchResult> findByTagIdInOrActIdIn(Collection<Integer> tagIds,Collection<Integer> actIds);*/

    /*@Query(value="SELECT loc.id, loc.city, loc.address, loc.latitude, loc.longitude, loc.company_id FROM locations loc JOIN activity_location actloc ON loc.id = actloc.location_id \n" +
            "JOIN activities act ON act.id = actloc.activity_id JOIN activity_tag acttag ON act.id = acttag.activity_id JOIN tags tag ON tag.id = acttag.tag_id \n" +
            "WHERE tag.id IN (:tagIds) GROUP BY loc.id", nativeQuery = true)
    List<Location> findByTagIdInListOfIds(@Param("tagIds")Collection<String> tagIds);*/

}
