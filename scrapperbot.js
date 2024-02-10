const post_content = document.querySelector('body > section.Section-main.main.page-main > div > div > div.col-sm-8.order-1.order-md-2')
const article_title = document.querySelector('h1').innerText
let section_title = article_title
let JSON_result = {data : []}
function scrapper() {
    for (let i = 0; i < [...post_content.childNodes].length; i++) {
        const element = [...post_content.childNodes][i];
        if (element.tagName == 'H3') {
            section_title = element.innerText
        }
        else if (element.tagName == 'P' || element.tagName == 'UL') {
            new_data = {
                article_title : article_title,
                section_title : section_title,
                passage_text : element.innerText
            }
            JSON_result["data"].push(new_data)
        }
    }
}
JSON_result
function Cleaner(json_data) {
    let indexes = []
    for (let index = 0; index < json_data["data"].length; index++) {
        let element = json_data["data"][index];
        if (element["passage_text"].trim() == ''){
            indexes.push(index)
        }
        console.log(index);
    }
    for (let index = 0; index < indexes.length; index++) {
        const element = indexes[index];
        json_data["data"].splice(element-index,1)
    }

    return json_data
}
scrapper()
JSON_result = Cleaner(JSON_result)
JSON_result= JSON.stringify(JSON_result["data"])
JSON_result=JSON_result.slice(1,JSON_result.length-1)
JSON_result

