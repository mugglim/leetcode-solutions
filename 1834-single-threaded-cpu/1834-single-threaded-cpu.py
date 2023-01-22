import heapq

class Solution:
    def getOrder(self, tasks: List[List[int]]) -> List[int]:
        result = []
        heap = []
        
        tasks = sorted([[e,p,i] for i,[e,p] in enumerate(tasks)], key=lambda x:x[0])
        
        i = 0
        time = tasks[0][0]
        
        while heap or i < len(tasks):
            
           # push task to available tasks
            while i < len(tasks) and time >= tasks[i][0]:
                heapq.heappush(heap, [tasks[i][1], tasks[i][2]])
                i += 1
            
            # process task
            if heap:
                p, order = heapq.heappop(heap)
                time += p
                result.append(order)
            else:
                # if available tasks is empty
                time = tasks[i][0]
                
        return result

