﻿using System.ComponentModel.DataAnnotations;

namespace WebApi.Models;

public class Hiking
{
    [Key]
    public int Id { get; set; }

    [Required]
    public string Name { get; set; }
        
    [Required]
    public string Location { get; set; }
        
    [Required]
    public DateTime Date { get; set; }
        
    [Required]
    public bool ParkingAvailable { get; set; }
        
    [Required]
    public int LengthOfHike { get; set; }
        
    [Required]
    public string DifficultLevel { get; set; }

    public string Description { get; set; }
}