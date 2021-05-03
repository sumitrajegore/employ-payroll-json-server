$(document).ready(function() {
    var innerHtml = " ";
    $.ajax({
        url: "http://localhost:3000/employee",
        type: "GET",
        dataType: "json",
        
        success: function(data){
            //console.log(data[3]);

            let empArray = data;
            //console.log(empArray);
            //console.log(empArray[0].name);
            $.each(empArray , function(index,value){
                //console.log(`${value.department}`);
                innerHtml += 
                `<tr>
                    <td><img class="profile" src="${value.profile}"></td>
                    <td>${value.name}</td>
                    <td>${value.gender}</td>
                    <td>${value.department}</td>
                    <td>${value.salary}</td>
                    <td>${value.startdate}</td>
                    <td>
                        <a onclick="update(${value.id})" href="../html/update.html"> 
                            <img id="${value.id}"  alt="edit" src="../assets/icons/edit-black-18dp.svg"> 
                        </a>
                        <a onclick="remove(${value.id})"> 
                            <img id="${value.id}" alt="delete" src="../assets/icons/delete-black-18dp.svg">                            
                        </a>
                    </td>   
                </tr>`
            });
            $('#table-display').append(innerHtml)
        } 
    });    
});

remove = (id) => {
    //console.log('Employ information ',value.id);
    $.ajax({
        type:'delete',
        url: "http://localhost:3000/employee/"+id,
        contentType:"application/json",

        success: function (data) {
            console.log(data);
        },
        error : function(error) {
            console.log(`Error ${error}`);
        }
    });
};

// update = (id) => {

//     $.ajax({
//         type: 'put',
//         url: "http://localhost:3000/employee/"+id,
//         contentType:"application/json",

//         success : function (data) {
//             console.log(data);
//         },
//         error : function(error) {
//             console.log(`Error ${error}`);
//         }
//     });
// };

update = (id) => {
    console.log(id);
    localStorage.setItem('empID',id);
}