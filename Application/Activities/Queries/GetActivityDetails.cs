using Domain;
using MediatR;
using Persistence;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Activities.Queries
{
    public class GetActivityDetails
    {
        public class Query : IRequest<Activity> 
        {
            public required string Id { get; set; }
        }

        public class  Handler(AppDbContext dbcontext):IRequestHandler<Query, Activity>
        {
            public async Task<Activity> Handle(Query query, CancellationToken cancellationToken)
            { 
               var activity= await dbcontext.Activities.FindAsync([query.Id],cancellationToken);
                if (activity == null)
                {
                    throw new KeyNotFoundException("Activity not found.");
                }
                else { 
                    return activity;
                }
            }
        }
    }
}
