using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI2.Models
{
    public class RoomType
    {
        public string RoomName { get; set; }
        public int ShortCode { get; set; }
        public string DescriptionRoom { get; set; }
        public string BaseOccupnacy { get; set; }
        public string HighOccupancy { get; set; }
        public string ExtraBed { get; set; }
        public string KidsOccupancy { get; set; }
        public string Amenities { get; set; }
        public int BasePrice { get; set; }
    }
}
