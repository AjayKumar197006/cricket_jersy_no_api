const sql=require("mysql2")

const con=sql.createConnection(
    {
        host:host,
        user:user,
        password:password,
        database:database
    }
)

function getData()
{
    return new Promise(function(success,reject)
{
    con.query(`SELECT * from jersynumbers `,function(err,rows,col)
    {
        if(err)
            {
                reject(error)
            }
            else
            {
                success(rows)
            }
    })
})
}

function addData(nu,na,co)
{
    return new Promise(function(success,reject)
    {
    
    con.query(`INSERT INTO jersynumbers(number,name,country) VALUES(?,?,?)`,[nu,na,co]),function(err,res)
    {
        if(err)
            {
                reject(err)

            }
        else
        {
            success(res)
        }
    }
  })
}

function updateData(nu,na,co,n)
{
    return new Promise(function(success,reject)
{
    con.query(`UPDATE jersynumbers SET number=?,name=?,country=? where number=?`,[nu,na,co,n],function(err,res)
{
    if(err)
        {
            reject(error)
        }
    else
    {
        success(res)
    }
})
})
}

function getPlayer(nu)
{
    return new Promise(function(success,reject)
{
    con.query(`SELECT * from jersynumbers WHERE number=?`,[nu],function(err,res)
{
    if(err)
        {
            reject(err)
        }
    else
    {
        console.log(nu)
        success(res)
        
    }
})

})
    
}

function deleteData(nu)
{
    return new Promise(function(success,reject)
    {
        con.query(`DELETE FROM jersynumbers where number=?`,[nu],function(err,res)
        {
            if(err)
                {
                    reject(err)
                }
            else
            {
                console.log(res)
                success(res)
            }
        })
        

    })

}


module.exports={addData,getData,updateData,getPlayer,deleteData}