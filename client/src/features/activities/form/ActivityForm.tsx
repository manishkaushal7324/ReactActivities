import { Box, Button, Paper, TextField, Typography } from "@mui/material"
import type { FormEvent } from "react";
import { useActivities } from "../../../lib/hooks/useActivities";
import { useNavigate, useParams } from "react-router";

export default function ActivityForm() {

    const { id } = useParams();
    const { updateActivity, createActivity, activity, isLoadingActivity } = useActivities(id);
    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data: { [key: string]: FormDataEntryValue } = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        if (activity) {
            data.id = activity.id;
            await updateActivity.mutateAsync(data as unknown as Activity);
            navigate(`/activities/${activity.id}`);
        }
        else {
            createActivity.mutate(data as unknown as Activity, {
                onSuccess: (id) => {
                    navigate(`/activities/${id}`);
                }
            })            
        }
    }

    if (isLoadingActivity) return <Typography>Loading...</Typography>

    return (
        <Paper sx={{ padding: 3, borderRadius: 3 }}>
            <Typography variant="h5" gutterBottom color="primary">
                {activity?'Edit Activity':'Create Activity'}  
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField name="title" label="Title" defaultValue={activity?.title} variant="outlined" />
                <TextField name="description" label="Description" defaultValue={activity?.description} variant="outlined" multiline rows={3} />
                <TextField name="category" label="Category" defaultValue={activity?.category} variant="outlined" />
                <TextField name="date" label="Date" defaultValue={activity?.date ?
                    new Date(activity.date).toISOString().split('T')[0] :
                    new Date().toISOString().split('T')[0]} variant="outlined" type="date" />
                <TextField name="city" label="City" defaultValue={activity?.city} variant="outlined" />
                <TextField name="venue" label="Venue" defaultValue={activity?.venue} variant="outlined" />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
                    <Button onClick={() => { } } variant="outlined" color="inherit">Cancel</Button>
                    <Button type="submit" variant="contained" color="success"
                        disabled={updateActivity.isPending || createActivity.isPending}
                    >Submit</Button>
                </Box>
            </Box>
        </Paper>
    )
}