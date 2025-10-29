# Icons Needed for Homepage Projects Section

## 📊 Projects Shown on Homepage (4 projects)

Looking at `src/components/landing/Projects.tsx`, only the **first 4 projects** are displayed:
```
projects.slice(0, 4)
```

### Currently Displayed Projects:

1. **Duckie Productivity MCP Server**
   - TypeScript ✅
   - Node.js ✅
   - AI/ML (using generic Github icon)

2. **Duckie 2.0**
   - TypeScript ✅
   - Node.js ✅
   - AI/ML (using generic Github icon)

3. **BitSqueez**
   - C++ (using generic Github icon)
   - Algorithms (generic)
   - Data Structures (generic)

4. **Bandwidth Optimizer**
   - C++ (using generic Github icon)
   - Networking (generic)
   - Performance (generic)

## ✅ Icons You Have (3 used)
- TypeScript ✅
- Node.js ✅
- React ✅
- Next.js ✅
- JavaScript ✅

## ❌ Icons You Need

For the projects section, you need:

### 1. C++ Icon
- **Used in:** BitSqueez, Bandwidth Optimizer, DSA Practice
- **Currently:** Using generic Github icon
- **Priority:** HIGH (used in 3 projects)

### 2. C Icon
- **Used in:** Memory Allocator
- **Currently:** Using generic Github icon
- **Priority:** MEDIUM (1 project in full list)

## 📝 Total Icons Needed for Projects Section

**Just 2 icons:**
1. **C++** - Replace generic Github icon in multiple projects
2. **C** - For Memory Allocator (if you want to use that project)

## 🎨 To Get C++ Icon:

Visit: https://simpleicons.org/icons/cplusplus.html

Copy the SVG and create `Cpp.tsx` in `/src/components/technologies/`

## 💡 Note

Your projects are using the generic Github icon for many technologies. To extract REAL tech from your GitHub repos, I would need API access or to manually check each repository.

**Current Status:**
- Most technologies already have proper icons ✅
- Just need to replace "Github" icon with proper C++ icon
- All other tech shown (TypeScript, Node.js) already have proper icons

**Recommendation:** Create a C++ icon component to replace the generic Github icon in your C++ projects.


