create database projektiLab1
use projektiLab1
--CRUD 1 -> DEPARTMENT
create table department(
	DepartmentId int identity(1,1),
	DepartmentName varchar(50)
)

insert into department values('Financa')
insert into department values('IT')
select * from department

--CRUD 2 -> EMPLOYEE
CREATE TABLE [dbo].[Employee](
	[EmployeeId] [int] IDENTITY(1,1) ,
	[EmployeeName] [nvarchar](500) ,
	[Department] [nvarchar](500) ,
	[DateOfJoining] [datetime] ,
	[PhotoFileName] [nvarchar](500) 
)
INSERT into [dbo].[Employee] ([EmployeeName], [Department], [DateOfJoining], [PhotoFileName]) VALUES ('Bob', 'IT', '2021-06-17', 'anonymous.png')
drop table employee
select * from dbo.Employee

--CRUD 3 -> ROOM
create table room(
	RoomNumber int identity(1,1),
	Flor int,
	RoomType varchar(50)
)
insert into room values(2,'double room')
select * from room

--CRUD 4 -> ROOM TYPE
create table roomtype(
	RoomName varchar(50),
	ShortCode int,
	DescriptionRoom varchar(50),
	BaseOccupancy varchar(50),
	HighOccupancy varchar(50),
	ExtraBed varchar(50),
	KidsOccupancy varchar(50),
	Amenities varchar(50),
	BasePrice int
)
insert into roomtype values('rooom',11,'me pamje nga deti','yes','no','yes','yes','yes',110)
select * from roomtype

--CRUD 5 -> HOUSEKEEPING
create table housekeeping(
	RoomId int identity(1,1),
	HouseKeepingStatus varchar(50),
	Remark varchar(50),
	AssignedTo varchar(50)
)
drop table housekeeping
insert into housekeeping values('ready','room1','yes')
select * from housekeeping

--CRUD 6 -> PRICEMANAGER
create table pricemanager(
	RoomId int,
	Monday varchar (10),
	Tuesday varchar (10),
	Wednesday varchar (10),
	Thursday varchar (10),
	Friday varchar (10),
	Saturday varchar (10),
	Sunday varchar (10),
)
insert into pricemanager values(11,'110','110','110','110','110','110','110')
select * from pricemanager

--CRUD 7 -> PAIDSERVICES
create table paidservices(
	NumberId int identity(1,1),
	Title varchar(20),
	RoomPrice int,
	Price int, 
	DescriptionService varchar(50)
	
)
insert into paidservices values('Pool',110,11,'text')
drop table paidservices
select * from paidservices

--CRUD 8 -> GUESTS
create table guest(
	GuestId int identity(1,1),
	PersonalNumber varchar(50),
	GuestName varchar(50),
	GuestSurname varchar(50),
)
insert into guest values('111','djdj','fjfj')

--CRUD 9 -> BOOKEDROOMS
create table bookedrooms(
	GuestId int identity(1,1),
	Days int
)
drop table bookedrooms
insert into bookedrooms values(1)


create table dbo.requesst ( ClientiID int identity (1,1), Request varchar (500))
insert into dbo.requesst values ('pamje nga deti')


 create table dbo.pagesa(
 ClientID int identity (1,1),
 Cash varchar (500),
 Installments varchar (500),
 Intime varchar (500),
 Done varchar (500),

 )
 insert into dbo.pagesa values ('Yes','No','Yes in time', 'Successfully')
 select * from dbo.pagesa


 create table dbo.tickets (
IdTiketa int identity (1,1),
Name varchar (500), 
DeparturePlace varchar (500),
ArrivalPlace  varchar (500),
Period varchar (500),

)
 insert into dbo.tickets values ('Hotel', 'Berlin','Peje','Prej-deri')
 select * from dbo.tickets