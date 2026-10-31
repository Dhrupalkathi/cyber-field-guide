# Parallel Programming Track — Python

> **Status: Working curriculum draft v1.0 · Last resource review: 31 October 2026.**  
> This is the existing CINS Stage 0/Stage 1 curriculum, split into smaller website pages for navigation. Its scope and sequence are preserved. It is a working draft, not a claim of formal DAU/CINS approval.


Programming is taught alongside Stage 1. It supports the whole cybersecurity journey and continues in later stages; students do not need to finish an entire programming course before continuing.

# Parallel Programming Track — Starts in Stage 1

Programming is not a separate stage that students must finish before cybersecurity. It is a parallel skill track. Python begins in Stage 1 and continues through Stages 2–5. Other languages are introduced only when the curriculum needs them.

## Programming track: Stage 1 outcomes

By the end of Stage 1, a student should be able to:

- Describe an algorithm as a finite set of steps for solving a problem.
- Break a simple problem into smaller steps.
- Write and run a Python script.
- Use variables, basic data types and operators.
- Accept input and display output.
- Use conditional statements and loops.
- Write and call functions with parameters and return values.
- Use strings, lists and simple dictionaries.
- Read basic error messages and debug syntax, runtime and logic errors.
- Test a program with normal, boundary and invalid inputs.
- Explain their code without relying on copied explanations.

## Programming module P1 — Computational thinking before syntax

### Topics

- Problem definition.
- Decomposition: break a problem into smaller tasks.
- Pattern recognition.
- Abstraction: focus on the information needed for the task.
- Algorithm design.
- Pseudocode and simple flowcharts.
- Input, processing and output.
- Test cases: expected result for a given input.

### Practice

Write pseudocode for a program that asks five cybersecurity-awareness questions, checks the answers and displays a score. Do not write Python yet.

### Checkpoint

A student can explain the program's steps and identify its inputs, processing and outputs.

## Programming module P2 — Python environment and first program

### Topics

- What Python is and what an interpreter does.
- Interactive shell/REPL versus a saved script.
- How to create and run a `.py` file.
- `print()` and basic input with `input()`.
- Comments and readable formatting.
- Indentation and basic syntax rules.
- Use a browser-based coding environment or a local Python 3 installation.

### Setup recommendation

- For a low-friction start, use a browser-based coding environment where available.
- For a local beginner setup, use a current Python 3 release from the official Python website and a beginner-friendly editor such as Thonny.
- Follow the device owner's or institution's software-installation policy.
- Do not run programming tools with administrator privileges unless there is a specific, understood need.

### Practice

Write a program that prints a short introduction, asks the student's preferred learning domain and displays a response.

### Checkpoint

The student can save, run and edit a Python script independently.

## Programming module P3 — Variables, data types and operators

### Topics

- Variables and assignment.
- Integers, floating-point numbers, strings and booleans.
- Naming variables clearly.
- Arithmetic operators.
- Comparison operators.
- Boolean operators (`and`, `or`, `not`).
- Type conversion and common type errors.
- String formatting.

### Practice

Create a program that asks for the number of completed learning modules and the number still remaining, then displays a simple progress summary. Use fictional values only where appropriate.

### Checkpoint

The student can select suitable data types, use operators and explain why type conversion may be necessary.

## Programming module P4 — Conditional logic

### Topics

- `if`, `elif` and `else`.
- Comparison and Boolean expressions.
- Nested conditions only when needed.
- Truth values and common logical mistakes.
- Input validation at a beginner level.

### Practice

Write a study-quiz programme that gives different feedback based on a score. The programme must handle out-of-range scores safely.

### Checkpoint

The student can write a branching program and test each branch.

## Programming module P5 — Loops and repetition

### Topics

- Why repetition is needed.
- `for` loops and `while` loops.
- `range()`.
- Loop counters and accumulators.
- Avoiding infinite loops.
- `break` and `continue` as concepts; use them sparingly at first.

### Practice

Extend the quiz programme so that it asks several questions, keeps score and displays the final result.

### Checkpoint

The student can choose a suitable loop and explain how it stops.

## Programming module P6 — Functions and reusable code

### Topics

- Why functions help organise a program.
- Defining and calling functions.
- Parameters and arguments.
- Return values.
- Local variables at a beginner level.
- Breaking a larger problem into small functions.

### Practice

Refactor the quiz programme into functions such as `ask_question`, `check_answer` and `show_result`.

### Checkpoint

The student can write a function, pass it information and use its return value.

## Programming module P7 — Strings and basic collections

### Topics

- String indexing and common string operations.
- Lists: creating, accessing, updating and iterating.
- Dictionaries: key/value pairs and simple lookups.
- Choosing a list or dictionary for a simple problem.
- Avoiding unnecessary complexity and nested structures at this stage.

### Practice

Store quiz questions and answers in a list or simple dictionaries, then iterate through them.

### Checkpoint

The student can select an appropriate basic collection and use a loop to process its contents.

## Programming module P8 — Debugging, testing and code quality

### Topics

- Syntax errors, runtime errors and logic errors.
- Reading a traceback from the bottom upward to find the relevant error location.
- Reproducing a problem with a small test case.
- Using temporary print statements and a debugger if available.
- Testing normal, boundary and invalid inputs.
- Meaningful variable and function names.
- Comments that explain intent rather than repeat the code.
- Basic code review: readability, correctness and simplicity.

### Practice

Give students a small intentionally buggy programme. They must identify the issue, explain it, fix it and provide at least three test cases.

### Checkpoint

A student can debug a small programme and explain why the fix works.

---

## Stage 1 programming projects

Students should complete small exercises throughout the track, followed by one final project.

### Suggested mini-projects

| Project | Concepts practised |
|---|---|
| Simple calculator | Input, variables, operators, conditions |
| Unit converter | Input validation, arithmetic, functions |
| Cybersecurity awareness quiz | Strings, conditions, loops, lists, functions |
| Computer component knowledge quiz | Data, lists/dictionaries, loops, scoring |
| Study progress tracker | Variables, arithmetic, conditions, functions |

### Recommended Stage 1 final project — Cyber Fundamentals Quiz

Build a command-line quiz that teaches basic computer and cybersecurity concepts.

**Minimum requirements**

- Display a welcome message and explain how to use the programme.
- Ask at least eight questions.
- Store questions and answers in a suitable collection.
- Use functions to organise the programme.
- Check answers and calculate a score.
- Give feedback based on the score.
- Validate simple input where necessary.
- Include at least three test cases, including an invalid input case.
- Include a short README explaining how to run the programme and what it covers.

**Optional improvements**

- Shuffle question order.
- Show explanations after each answer.
- Categorise questions by computer hardware, software and safe computing.
- Allow a second attempt.

Do not add network scanning, password guessing, credential collection or other security-testing functionality to this beginner project.

### AI use in programming

AI tools may be used as learning assistants, for example to explain an error message or compare two approaches. Students must:

- Understand and be able to explain every submitted line of code.
- Test generated or suggested code themselves.
- Record meaningful AI assistance according to the club or course submission rules.
- Never paste passwords, tokens, private data, unpublished vulnerabilities or confidential files into public AI tools.
- Avoid submitting code they cannot explain or reproduce.

The objective is to learn programming, not to produce code by copying prompts.

---

# Continuous programming progression after Stage 1

| Stage | Programming development |
|---|---|
| Stage 1 | Python basics: computational thinking, variables, conditions, loops, functions, collections and debugging. || Stage 2 | Python practice with files, exceptions and structured data; Bash alongside Linux after Networking; PowerShell alongside Windows; basic SQL and JavaScript when web fundamentals are taught. |
| Stage 3 | Python automation, text and log parsing, regular expressions, APIs, SQL fundamentals and secure coding concepts. |
| Stage 4 | Apply the relevant language and scripting skills to small projects in the domains being explored. |
| Stage 5 | Optional advanced programming, automation, tool development, software analysis and specialist engineering. |

Python remains the common starting language. Bash, PowerShell, JavaScript and SQL are introduced when students have the context to understand why they are useful. C/C++ and Assembly remain optional advanced subjects for relevant specialisations such as reverse engineering and low-level systems research.

---
