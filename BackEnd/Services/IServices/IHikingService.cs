using WebApi.Models;

namespace WebApi.Services.IServices;

public interface IHikingService
{
    IList<Hiking> GetAll();
    Hiking GetById(int id);
    Hiking Create(Hiking input);
    Hiking Update(Hiking input);
    bool Delete(int id);
    List<Hiking> Search(string keyword);
}