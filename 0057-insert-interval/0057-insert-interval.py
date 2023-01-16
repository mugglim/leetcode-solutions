class Solution:
        def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
            tmp = newInterval
            result = []
            
            for i, interval in enumerate(intervals):
                if tmp[1] < interval[0]:
                    result.append(tmp)
                    return result + intervals[i:]
                elif tmp[0] > interval[1]:
                    result.append(interval)
                else:
                    tmp[0] = min(tmp[0], interval[0])
                    tmp[1] = max(tmp[1], interval[1])
            
            result.append(tmp)
            
            return result
                