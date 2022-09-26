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
    public class RoomTypeController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public RoomTypeController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                            select RoomName, ShortCode, DescriptionRoom, BaseOccupancy,
                            HighOccupancy, ExtraBed, KidsOccupancy, Amenities, BasePrice from dbo.roomtype
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
        public JsonResult Post(RoomType rt)
        {
            string query = @"
                           insert into dbo.roomtype
                           values (@RoomName,@ShortCode, @DescriptionRoom, @BaseOccupancy,
                            @HighOccupancy, @ExtraBed, @KidsOccupancy, @Amenities, @BasePrice)
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@RoomName", rt.RoomName);
                    myCommand.Parameters.AddWithValue("@ShortCode", rt.ShortCode);
                    myCommand.Parameters.AddWithValue("@DescriptionRoom", rt.DescriptionRoom);
                    myCommand.Parameters.AddWithValue("@BaseOccupancy", rt.BaseOccupnacy);
                    myCommand.Parameters.AddWithValue("HighOccupancy", rt.HighOccupancy);
                    myCommand.Parameters.AddWithValue("@ExtraBed", rt.ExtraBed);
                    myCommand.Parameters.AddWithValue("@KidsOccupancy", rt.KidsOccupancy);
                    myCommand.Parameters.AddWithValue("@Amenities", rt.Amenities);
                    myCommand.Parameters.AddWithValue("@BasePrice", rt.BasePrice);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(RoomType rt)
        {
            string query = @"
                           update dbo.roomtype
                           set ShortCode=@ShortCode, DescriptionRoom=@DescriptionRoom, BaseOccupancy=@BaseOccupancy,
                            HighOccupancy=@HighOccupancy, ExtraBed=@ExtraBed, KidsOccupancy=@KidsOccupancy, Amenities=@Amenities, BasePrice=@BasePrice
                            where RoomName=@RoomName
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@RoomName", rt.RoomName);
                    myCommand.Parameters.AddWithValue("@ShortCode", rt.ShortCode);
                    myCommand.Parameters.AddWithValue("@DescriptionRoom", rt.DescriptionRoom);
                    myCommand.Parameters.AddWithValue("@BaseOccupancy", rt.BaseOccupnacy);
                    myCommand.Parameters.AddWithValue("HighOccupancy", rt.HighOccupancy);
                    myCommand.Parameters.AddWithValue("@ExtraBed", rt.ExtraBed);
                    myCommand.Parameters.AddWithValue("@KidsOccupancy", rt.KidsOccupancy);
                    myCommand.Parameters.AddWithValue("@Amenities", rt.Amenities);
                    myCommand.Parameters.AddWithValue("@BasePrice", rt.BasePrice);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }
        [HttpDelete("{name}")]
        public JsonResult Delete(string name)
        {
            string query = @"
                           delete from dbo.roomtype
                            where RoomName=@RoomName
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@RoomName", name);

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
