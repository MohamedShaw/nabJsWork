export const SubCategory ={

    id: Number,
    category_id: Number,
    category_name: String,
    category_name_ar: String,
    category_description: String,
    category_keywords: String,
    category_the_order: Number,
    title: String,
    short_title: String,
    text: String,
    article_date: String,
    inserted_date: String,
    description: String,
    keywords: String,
    translator: String,
    checker: String,
    reviewer: String,
    reference_arabic: Number,
    reference_english: Number,
    reference_french: Number,
    reference_spanish: Number,
    reference_chinese: Number,
    reference_persian: Number,
    reference_turkish: Number,
    video_library: Number,
    sound_library: Number,
    views: Number,
    in_home: Number,
    image: String,
    clear_text: String,
    reference_old_arabic: Number,
    attach: [] | null,

}


export const  Attach = {
    id: String,
    article_id: String,
    sn: String,
    sr: String,
    vw: String,
    vd: String,
    do: String,
    pd: String,
    yt: String,
    sc: String,
    sn_download: String,
    sr_download: String,
    vw_download: String,
    vd_download: String,
    do_download: String,
    pd_download: String,
}



