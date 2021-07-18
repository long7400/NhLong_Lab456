using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BigSchool.Models
{
    public enum NotificationType
    {
        CourseCanceled = 1,
        CourseUpdated = 2,
        CouorseCreate = 3
    }
}