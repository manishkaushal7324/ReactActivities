using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Activities.Queries
{
    public class GetActivityList
    {
        public class Query : IRequest<List<Activity>> { }

        public class Handler(AppDbContext dbcontext) : IRequestHandler<Query, List<Activity>> {
            public async Task<List<Activity>> Handle(Query query, CancellationToken cancellationToken)
            { 
              return await dbcontext.Activities.ToListAsync(cancellationToken);
            }
        }
    }
}
