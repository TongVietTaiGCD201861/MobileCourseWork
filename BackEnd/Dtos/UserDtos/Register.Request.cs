﻿using System.ComponentModel.DataAnnotations;
using WebApi.Models;

namespace WebApi.Dtos.UserDtos
{
    public class RegisterRequest
    {
        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public Role Role { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
