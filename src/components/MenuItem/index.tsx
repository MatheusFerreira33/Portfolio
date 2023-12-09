'use client'
import { MenuItem } from "@chakra-ui/react"

type Tprops = {
    name:string
}
export const Item = ({name}:Tprops)=>{

    return(
        <>
            <MenuItem
                style={{
                    backgroundColor:'#0A0A0B',
                  
                }}
            >
                {name}
            </MenuItem>           
        </>
    )
}