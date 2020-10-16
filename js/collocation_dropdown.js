var series = [
    {name: 'Write', dropdown_item: 'technical'},
    {name: 'Write', dropdown_item: 'texts'},
    {name: 'Transfer', dropdown_item: 'students'},
    {name: 'Transfer', dropdown_item: 'writing'},
    {name: 'Transfer', dropdown_item: 'information'}
    ]
//testing on some values, so haven't added all of them
//company->type_name
//product->dropdown-item
    
    $(".type_name").change(function(){
        var type_name = $(this).val();
        var options =  '<option value=""><strong>dropdown_items</strong></option>';
        $(series).each(function(index, value){
            if(value.name == type_name){
                options += '<option value="'+value.dropdown_item+'">'+value.dropdown_item+'</option>';
            }
        });
        
        $('.dropdown_item').html(options);
    });
    