function addItem(a)
{
    var count = $(a).data("count") || 0;
    if(count < 1)
    {
        let item = (a.id)
        let value = "#" + item + 1
        console.log(value)
        let image = "#" + item + 0
        let imageContent = $(image).html()
        let valueContent = $(value).html()
        $(a).data("count", ++count);
        $("#items").append("<tr id=1" + item + "><td>" + imageContent + "</td><td><div>" + item + "</div></td><td><div>" + valueContent + "</div></td><td><div>" + count + "</div</td></tr>")
    }
    else
    {
        let item = (a.id)
        $("#1" + item).remove()
        let value = "#" + item + 1
        let image = "#" + item + 0
        let imageContent = $(image).html()
        let valueContent = $(value).html()
        valueContent = valueContent.split("")
        valueContent.shift()
        for(let i = 0; i < 100; i++)
        {
            let current = valueContent.length
            current = current - 1
            if(valueContent[current] == " ")
            {
                valueContent.pop()
            }
            else
            {
                valueContent.pop()
                break
            }


        }
        $(a).data("count", ++count);
        valueContent = Number(valueContent) 
        valueContent = valueContent * count
        valueContent = "$" + valueContent
        $("#items").append("<tr id=1" + item + "><td>" + imageContent + "</td><td><div>" + item + "</div></td><td><div>" + valueContent + "</div></td><td><div>" + count + "</div</td></tr>")
    }
}
