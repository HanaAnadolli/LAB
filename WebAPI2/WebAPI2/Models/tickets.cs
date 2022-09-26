using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI2.Models
{
    public class tickets
    {
        public int IdTiketa { get; set; }

        public string Name { get; set; }
        public String DeparturePlace { get; set; }
        public String ArrivalPlace { get; set; }


        public string Period { get; set; }
    }
}
