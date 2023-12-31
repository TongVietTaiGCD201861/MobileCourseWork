﻿using WebApi.Data;
using WebApi.Models;
using WebApi.Services.IServices;

namespace WebApi.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly ApplicationDbContext _db;

        public CategoryService(ApplicationDbContext db)
        {
            _db = db;
        }
        public void Create(Category category)
        {
            _db.Categories.Add(category);
            _db.SaveChanges();
        }

        public bool Delete(int id)
        {
            var category = GetById(id);
            if (category == null)
            {
                return false;
            }
            _db.Categories.Remove(category);
            _db.SaveChanges();
            return true;
        }

        public IEnumerable<Category> GetAll()
        {
            return _db.Categories.ToList();
        }

        public Category GetById(int id)
        {
            return _db.Categories.Find();
        }

        public void Update(int id, Category category)
        {
            var categoryDb = GetById(id);

            categoryDb.Description = category.Description;
            categoryDb.Name = category.Name;

            _db.Categories.Update(categoryDb);
            _db.SaveChanges();
        }
    }
}
