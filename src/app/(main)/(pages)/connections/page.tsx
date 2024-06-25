import { CONNECTIONS } from '@/lib/constants'
import React from 'react'
import ConnectionCard from './_components/connection-card'
type Props = {
    searchParams? : {[key:string] : string | undefined}
}
const Connections = () => {
  return (
    <div className='relative flex flex-col gap-4'>
      <h1 className='sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg'>
        Connections
      </h1>
      <div className="relative flex flex-col gap-4">
        <section className="flex flex-col gap-4 p-6 text-muted-foreground">
        Connect your all apps directly from here. You may need to connect to these apps regularly to referesh verification
        {CONNECTIONS.map((connection)=>(
            <ConnectionCard 
            key={connection.title}
            icon={connection.image}
            description={connection.description}
            // callback={}
            title={connection.title}
            />
        ))}
        </section>
      </div>
    </div>
  )
}

export default Connections
