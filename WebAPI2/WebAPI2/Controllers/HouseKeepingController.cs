using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using WebAPI2.Models;

namespace WebAPI2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HouseKeepingController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public HouseKeepingController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                            select RoomId, HouseKeepingStatus, Remark, AssignedTo from dbo.housekeeping
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }
        [HttpPost]
        public JsonResult Post(HouseKeeping h)
        {
            string query = @"
                           insert into dbo.housekeeping
                           values ( @HouseKeepingStatus, @Remark, @AssignedTo)
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                 
                    myCommand.Parameters.AddWithValue("@HouseKeepingStatus", h.HouseKeepingStatus);
                    myCommand.Parameters.AddWithValue("@Remark",h.Remark);
                    myCommand.Parameters.AddWithValue("@AssignedTo", h.AssignedTo);
                  
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }
        [HttpPut]
        public JsonResult Put(HouseKeeping h)
        {
            string query = @"
                           update dbo.housekeeping
                           set HouseKeepingStatus=@HouseKeepingStatus, Remark=@Remark, AssignedTo=@AssignedTo where RoomId=@RoomId
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@RoomId", h.RoomId);
                    myCommand.Parameters.AddWithValue("@HouseKeepingStatus", h.HouseKeepingStatus);
                    myCommand.Parameters.AddWithValue("@Remark", h.Remark);
                    myCommand.Parameters.AddWithValue("@AssignedTo", h.AssignedTo);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }
        [HttpDelete("{name}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                           delete from dbo.housekeeping
                            where RoomId = @RoomId
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@RoomId", id);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }
    }
}
