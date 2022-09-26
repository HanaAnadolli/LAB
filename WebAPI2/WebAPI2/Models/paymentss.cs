using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace WebAPI2.Models

{
    public class paymentss
    {
        public int ClientID { get; set; }
        public string Cash { get; set; }
        public string Installments { get; set; }

        public string Intime { get; set; }
        public string Done { get; set; }
    }
}

