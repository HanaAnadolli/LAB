using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI2.Models
{
    public class HouseKeeping

    {
        public int RoomId { get; set; }
        public string HouseKeepingStatus { get; set; }
        public string Remark { get; set; }
        public string AssignedTo { get; set; }
    }
}
