package exe.outdooradventures.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import exe.outdooradventures.entity.Company;

public interface CompanyRepository extends JpaRepository<Company, Integer> {
}
