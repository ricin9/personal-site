<script>
  import SvgPanZoom from "$lib/components/SvgPanZoom.svelte";
</script>

[home](/)

# Innovium

Innovium is the name of our 3rd year CS university multidiscplinary project, it was a group project consisting of myself and three of my friends.

## my responsabilities

- as the team's leader I had to report to the project supervisors and make sure we meet deadlines
- Defining sprints and tasks and dividing the workload on the team (including myself)
- Database logical and physical design
- High level application design (architecture)

## what is the project about

Innovium is a web application designed to digitalize the entire process of applying for a startup or a patent end of study project per the **Ministerial Order No. 1275 of September 27, 2022 relating to the “one diploma, one Startup”**

### what is order 1275

classically 5th year university students prepare a project related to their master's specialty for their graduation thesis, the project can consist of 1 or 2 students, in the latter the students must be in the same specialty. In order to drive innovation and encourage the creation of new startups, the ministry of higher education decreed that up to 6 students can engage in a end of study project with the end result of two options, either the project ends up a startup incubated by the ministry, or it receives an innovation patent to be licensed/sold to other entreprises. the 6 students can all be of different specialties, domains, and of level of study, meaning they don't have all to be final year students except for the project leader, for example imagine a startup that uses artifical intelligence to diagnose cancer in patients, the project's team could consist of a last year artificial intelligence student, a medical student, an economics student, .. etc.

### what is the process of this project

1. the project's leader chooses team members, supervisors, name, description and type of project (startup or patent) and submits it.
1. the scientific committee of the university in which the leader studies reviews the submission, and it has 3 options, accept the project, refuse or accept with reservation
   1. in case of refusal, the leader must continue with a classical project
   1. in case of acceptance wtih reservation, the leader must change some characteristics of the projects to satisfy the committee
1. the supervisors set tasks on the application with objectives and required deliverables
1. after an acceptable advancement of the project (doesn't have to be complete) the supervisors request final deliverables like a business plan and other documents related to the startup/patent.
1.

## technologies used

### backend

- rest Api written in nestjs with typescript typing
- postgresql with prisma orm
- jwt and passport for authentication

### frontend

- svelte with typescript typing
- tailwindcss and daisyui
- svelte-i18n for multilingual support (french, english and arabic)

### other

- git and github
- husky for git hooks to run formatting and other checks
- prettier for formatting

### what i wish we would have used at the time

- i wish we used sveltekit instead of plain svelte, it would have reduced a lot of development and debugging time related to routing thanks to its filesystem based routing with error pages, wildcard and pattern matched routes, but no one in the team was familiar with it so we stuck with plain svelte + a CSR routing library.

- combining both the frontend and backend into one repo would have helped us a lot regarding api type safety, since both are written in typescript we could have just referenced frontend api calls to backend api handler's return type. instead we just duplicated the types which is tedious in case of change (which was a lot), we were not familiar with monorepos (nx, turbopack, pnpm workspaces, ..etc) but i think it would have worked even without these tools.

- the most time consuming task we have found is integrating backend api calls in the frontend, even though both sides are written in typescript, technologies that mitigate this effort are the ones that offer end-to-end type safety like **trpc**, **elysiajs eden**, **hono rpc** and maybe even converting nestjs generated openapi documentation into js functions with **openapi-generator**, or using full-stack frameworks like nextjs, sveltekit, nuxt, laravel, django

### pain points within the stack

- we had a lot of problems with prisma codegen, often when we modify the database schema and generate migrations, prisma would not generate runtime database table definitions and types which would trigger annoying editor and typescript errors, even when running `prisma db generate` that generates code, solution was to delete prisma client and reinstalling it which took some time with npm `rm -rf node-modules/@prisma/client/`

- while this isn't a major problem, when using nestjs we were essentially locked into using **class-validator** and **class-transformer** to validate and transform incoming data to the api, we would have preferred working with zod and other similar validation packages but we could not pass up the amazing integration of **class-validator** into nestjs ecosystem.

## app architecture

the app's architecture is simple and common, a backend service that communicates with postgresql and provides a rest api to the client, the client uses api calls to authenticate user, fetch and mutate date, the frontend uses client side routing.

## database schema

<SvgPanZoom imageUrl="/prisma-erd.svg" />

_database schema generated from prisma schema with [prisma-erd.simonknott.de](https://prisma-erd.simonknott.de)_

## Is this a good database design?

well let's first define the project's mission statement and its objectives

### mission statement

the web application allows final year students, the different university departments to process and track a projects conforming to the order of 1275.

### mission objectives

- Allow **final year students** to submit project proposals
- Allow the university's **scientific committee** to review project proposals and accept/refuse them
- Force **project leader** to modify the project after receiving acceptation with reservation
- Give **project supervisors** ability to assign and track tasks to the project members.
- Give **internship service** ability to organize and schedule project defense after sufficient project progress
- Allow **internship service** to assign jury president, members and invitees of project defense.
- Give **project defense's jury president** ability to deliberate the project defense results by assigning grades to each member
- Allow **internship service** to print diplomas.

### business rules

the project has many business rules and constraints that play a **major** factor in the database design, these may not be all of them as i am writing this from memory.

1. A project has at least 1 and at most 6 students
1. One of the project members has to be the project's owner and leader and they must be a final year student (5th year)
1. A project must have one principal supervisor, and two optional secondary supervisors (1-3 supervisors)
1. Project supervisors is a university professor/teacher
1. Project submission must be reviewed by the scientific committee of the university in which the project owner studies
1. Project submission review yields 3 possible responses, acceptation, refusal, acceptation with reservation
   - in case of acceptation with reservation the project owner must modify the project details according to the scientific committee's wishes.
1. The project's defense must be organized by the internship service of the university in which the project owner studies
1. The project's defense jury's president and members must be professors/teachers, the jury invitees can be teachers or individuals not related to university (ex: economy and financial expert)
1. the web application has 5 distinct periods
   1. Project submission period : web app allows only project submissions.
   1. Initial Project submission review : submissions are closed and now submitted projects are reviewed by the scientific committee
   1. Project's initial decision appeal : projects that received _accepted with reservation_ decision are allowed to be modified by the project's owner
   1. Project's appeal's review : the scientific committee reviews changes and then gives final decision (acceptation or refusal)
   1. Project development : now each project develops at its own pace, this period also includes project's defense.

<!-- docs https://drive.google.com/drive/folders/1l3DaxVP1UDcCj3FwZYgWdbeMtNOj8_Fx?usp=drive_link -->
