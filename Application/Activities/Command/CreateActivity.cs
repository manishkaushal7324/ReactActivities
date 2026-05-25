using Domain;
using MediatR;
using Persistence;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Activities.Command
{
    public class CreateActivity
    {
        public class Command : IRequest<string>
        { 
          public required Activity Activity { get; set; }
        }
        public class Handler(AppDbContext dbcontext) : IRequestHandler<Command, string>
        {
            public async Task<string> Handle(Command request, CancellationToken cancellationToken)
            {
                dbcontext.Activities.Add(request.Activity);
                await dbcontext.SaveChangesAsync(cancellationToken);
                return request.Activity.Id;
            }
        }
    }
}
