import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
   // pass TLijSUwWzwZpJ7iF
   //name FlowByte
    const categories=[
        {
            "categoryId":1,
            "name":"oppo Reno5",
            "img":"https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/athena-reno5/navigation/Reno5-4G-navigation-sliver-v2.png.thumb.webp",
            "location":"dhaka",
            "rePrice":"10000",
            "orPrice":"20000",
            "usetime":"1",
            "sallerName":"bijon",
            "time":""
        },
        {
            "categoryId":1,
            "name":'oppo f21s pro',
            "img":"https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/f21s-pro/navigation/f21s-pro-427_600-gold.png.thumb.webp",
            "location":"dhaka",
            "rePrice":"10000",
            "orPrice":"20000",
            "usetime":"1",
            "sallerName":"bijon",
            "time":""
        },
        {
            "categoryId":1,
            "name":'oppo A54',
            "img":"https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/a54/navigation/A54-navigation-blue-v2.png.thumb.webp",
            "location":"dhaka",
            "rePrice":"10000",
            "orPrice":"20000",
            "usetime":"1",
            "sallerName":"bijon",
            "time":""
        },
        {
            "categoryId":2,
            "name":'vivo 25e',
            "img":"https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1661761546976/bdd3f1e6ffd48c8b8886acd29006565e.png",
            "location":"dhaka",
            "rePrice":"10000",
            "orPrice":"20000",
            "usetime":"1",
            "sallerName":"bijon",
            "time":""
        },
        {
            "categoryId":2,
            "name":'vivo v25Pro',
            "img":"https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1661446790437/20e80ffee46fd7b85871f5fc91a8f027.png",
            "location":"dhaka",
            "rePrice":"10000",
            "orPrice":"20000",
            "usetime":"1",
            "sallerName":"bijon",
            "time":""
        },
        {
            "categoryId":2,
            "name":'vivo Y22',
            "img":"https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1662085511337/0f096144efecf51f564160be8ae4b07b.png",
            "location":"dhaka",
            "rePrice":"10000",
            "orPrice":"20000",
            "usetime":"1",
            "sallerName":"bijon",
            "time":""
        },
        {
            "categoryId":3,
            "name":"HUAWEI Mate 50 Pro",
            "img":"https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/mate50-pro/img/kv/kv@2x.webp",
          "location":"dhaka",
           "rePrice":"10000",
           "orPrice":"20000",
        "usetime":"1",
       "sallerName":"bijon",
          "time":""
        },
        {
            "categoryId":3,
            "name":"HUAWEI Y5P",
            "img":"https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/phones/new-phones/model-banner/img-1009/y5p.png",
           "location":"dhaka",
           "rePrice":"10000",
           "orPrice":"2000",
        "usetime":"1",
        "sallerName":"bijon",
       "time":""
        }

    ]
    return (
        <div className='grid gap-3  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            

            <div className=' px-12 py-5 rounded-sm bg-lime-700'>
                
            <Link to='/category/1'>OPPO</Link>

            </div>
            <div className=' px-12 py-5 rounded-sm bg-lime-700'>
            <Link to='/category/2'>VIVO</Link>

            </div>
            <div className=' px-12 py-5 rounded-sm bg-lime-700'>
            <Link to='/category/3'>HUAWEI</Link>

            </div>
            
        </div>
    );
};

export default Categories;