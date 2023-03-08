package exe.outdooradventures.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import exe.outdooradventures.entity.User;


public interface UserRepository extends JpaRepository<User, Integer> {
}
