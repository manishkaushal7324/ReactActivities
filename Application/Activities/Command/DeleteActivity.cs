using AutoMapper;
using MediatR;
using Persistence;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Activities.Command
{
    public class DeleteActivity
    {
        public class Command : IRequest
        { 
          public string id { get; set; }
        }

        public class Handler(AppDbContext dbcontext) : IRequestHandler<Command>
        {
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await dbcontext.Activities.FindAsync([request.id], cancellationToken)
                   ?? throw new Exception("can not find activity.");

                dbcontext.Remove(activity);
                await dbcontext.SaveChangesAsync(cancellationToken);
            }
        }
    }
}
