using Domain;
using MediatR;
using Persistence;
using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;

namespace Application.Activities.Command
{
    public class EditActivity
    {
        public class Command : IRequest
        { 
          public required Activity Activity { get; set; }
        }

        public class Handler(AppDbContext dbcontext, IMapper mapper ) : IRequestHandler<Command>
        {
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await dbcontext.Activities.FindAsync([request.Activity.Id], cancellationToken)
                    ?? throw new Exception("can not find activity.");

                mapper.Map(request.Activity, activity);                
                await dbcontext.SaveChangesAsync(cancellationToken);
            }
        }
    }
}
