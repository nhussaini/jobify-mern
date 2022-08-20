import Job from '../models/Job.js';
import { StatusCodes } from 'http-status-codes';
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from '../errors/index.js';

const createJob = async (req, res) => {
  const { position, company } = req.body;

  if (!position || !company) {
    throw new BadRequestError('Please provide all values');
  }
  req.body.createdBy = req.user.userId; //req.user.userId is coming from the auth middleware
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};
const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  res
    .status(StatusCodes.OK)
    .json({ jobs, totalJobs: jobs.length, numOfPages: 1 });
};

//update a job
const updateJob = async (req, res) => {
  console.log('reached here');
  const { id: jobId } = req.params; //get the id from req.params and set an alias as jobId
  const { company, position } = req.body;
  console.log('req.body====>', req.body);

  if (!position || !company) {
    throw new BadRequestError('Please provide all values');
  }

  const job = await Job.findOne({ _id: jobId });
  if (!job) {
    throw new NotFoundError(`No job with id: ${jobId}`);
  }
  //check permission later

  const updatedJob = await Job.findOneAndUpdate({ _id: jobId }, req.body, {
    new: true, //returns the updated job
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({ updatedJob });
};
const deleteJob = async (req, res) => {
  res.send('delete job');
};
const showStats = async (req, res) => {
  res.send('show stats');
};

export { createJob, getAllJobs, updateJob, deleteJob, showStats };
