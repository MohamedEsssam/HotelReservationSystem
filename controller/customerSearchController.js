
const db=require('../models/index')
module.exports=async (req,res)=>{

    const { hotel_name,hotel_location,stars,room_type,check_in_date,check_out_date } = req.body;

    const hotelModel=db['HOTEL']
    const roomModel=db['ROOM']
    const reservationModel=db['RESERVATION']
   
    var searchQuery = "select HOTELs.hotel_name,HOTELs.hotel_location,HOTELs.telephone,HOTELs.email,HOTELs.stars,HOTELs.postal_code,HOTELs.type"+
    ",ROOMs.room_number,ROOMs.type,ROOMs.price"+
    ",RESERVATIONs.check_in_date,RESERVATIONs.check_out_date"+ 
    " from HOTELs"
    searchQuery+=" inner join ROOMs on ROOMs.hotel_name=HOTELs.hotel_name and ROOMs.hotel_location=HOTELs.hotel_location"
    searchQuery+=" inner join RESERVATIONs on RESERVATIONs.room_number=ROOMs.room_number and RESERVATIONs.hotel_name=ROOMs.hotel_name and RESERVATIONs.hotel_location=ROOMs.hotel_location" 
        
    +" where 1=1 and HOTELs.approval=1";
        if(hotel_name!=null)
        searchQuery+=" and hotel_name="+hotel_name;
        if(hotel_location!=null)
        searchQuery+=" and hotel_location="+hotel_location;
        if(stars!=null)
        searchQuery+=" and stars="+stars;
        if(room_type!=null)
        searchQuery+=" and room_type="+room_type;
         
        searchQuery+=" ORDER BY check_out_date ASC"
        var selectedRooms=[];
        db.sequelize.query(searchQuery, { model:hotelModel}).then(searchedRooms => {
         searchedRooms.forEach((element,index) => {
             if(searchedRooms[index].dataValues.check_out_date<check_in_date){
                if(check_in_date<searchedRooms[index+1].dataValues.check_in_date){
                 SelectedRooms.push(searchedRooms[index]);
                }
                }
                res.render("",{selectedRooms});

             console.log(element.dataValues.room_number);
          });
        });
               
}