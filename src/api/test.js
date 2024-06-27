import request from '@/utils/request'

export function getImageList(){
    return request({
        method:'get',
        url:'/user/imglist',
    })
}
export function insertuser(formData){
    return request({
        method:'post',
        url:'/user/insertuser',
        data:formData
    })
}

export function getUserList(){
    return request({
        method:'get',
        url:'/user/getlist'
    })

}

export function ExportInfo(user){
    return request({
        method:'post',
        url:'/user/exportinfo',
        data:user,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        responseType: 'arraybuffer', // 设置为arraybuffer以接收二进制数据
    })

}
export function ExportinfoExcel(){
    return request({
        method:'post',
        url:'/user/exportinfoExcel',

        responseType: 'blob', // Important

    })

}