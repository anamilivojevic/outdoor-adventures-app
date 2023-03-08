package exe.outdooradventures.contoller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import exe.outdooradventures.contoller.utilities.RestUtilities;
import exe.outdooradventures.entity.Company;
import exe.outdooradventures.repository.CompanyRepository;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/companies")
public class CompanyController {

    @Autowired
    private CompanyRepository companyRepo;


    @GetMapping
    public List<Company> getCompanies() {
        return companyRepo.findAll();
    }

    @GetMapping("/{id}")
    public Company getCompanyById(@PathVariable int id) {
        return RestUtilities.findByIdOrThrow(companyRepo, id);
    }

    @PostMapping()
    public Company addCompany(@Valid  @RequestBody Company newCompany) {
        newCompany.setId(0);
        return companyRepo.save(newCompany);
    }

    @PutMapping("/{id}")
    public Company updateCompany(@PathVariable int id, @Valid @RequestBody Company updatedCompany) {
        Company companyBeforeUpdate = RestUtilities.findByIdOrThrow(companyRepo, id);
        updatedCompany.setId(id);
        updatedCompany.setLocations(companyBeforeUpdate.getLocations());
        return companyRepo.save(updatedCompany);
    }

    @DeleteMapping("/{id}")
    public void deleteCompany(@PathVariable int id) {
        RestUtilities.throwIfNonExistentId(companyRepo, id);
        companyRepo.deleteById(id);
    }

    // To transfer locations of one company to another (e.g. if one company acquires another)
    /*@PutMapping("/{id}/changecompany/{newCompanyId}")
    public Company changeCompanyForLocations(@PathVariable("id") int id, @PathVariable("newCompanyId") int newId) {
        Company oldCompany = RestUtilities.findByIdOrThrow(companyRepo, id);
        Company newCompany = RestUtilities.findByIdOrThrow(companyRepo, newId);

        Set<Location> oldCompanyLocations = oldCompany.getLocations();
        for (int i = 0; i < oldCompanyLocations.size(); i++) {

        }
        newCompany.setLocations(newCompany.getLocations());
    }*/
}
