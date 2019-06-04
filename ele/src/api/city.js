import request from '@/utils/request.js'
export let getCurCity =params=>{
    return request.get('https://elm.cangdu.org/v1/cities?type=guess')
}
export let changeCity =params=>{
    console.log(`https://elm.cangdu.org/v1/cities/${params}`,'hhhhhh')
    return request.get(`https://elm.cangdu.org/v1/cities/${params}`)
}
export let getHotCity =params=>{
    return request.get('https://elm.cangdu.org/v1/cities?type=hot')
}
export let getAllCity =params=>{
    return request.get('https://elm.cangdu.org/v1/cities?type=group')
}
export let getSearchResult =params=>{
    params = {
        ...params,
        keyword:encodeURI(params.keyword)
    }
    return request.get('https://elm.cangdu.org/v1/pois?type=search',params)
}